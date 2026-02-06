# ComplianceReport200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**generated_at** | **int** |  | [optional] 
**expires_at** | **int** |  | [optional] 
**summary** | [**ComplianceReport200ResponseDataSummary**](ComplianceReport200ResponseDataSummary.md) |  | [optional] 
**encrypted_report** | **str** |  | [optional] 
**report_hash** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.compliance_report200_response_data import ComplianceReport200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceReport200ResponseData from a JSON string
compliance_report200_response_data_instance = ComplianceReport200ResponseData.from_json(json)
# print the JSON string representation of the object
print(ComplianceReport200ResponseData.to_json())

# convert the object into a dict
compliance_report200_response_data_dict = compliance_report200_response_data_instance.to_dict()
# create an instance of ComplianceReport200ResponseData from a dict
compliance_report200_response_data_from_dict = ComplianceReport200ResponseData.from_dict(compliance_report200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


