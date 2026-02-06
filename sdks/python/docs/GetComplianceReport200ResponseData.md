# GetComplianceReport200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**report_id** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**generated_at** | **int** |  | [optional] 
**expires_at** | **int** |  | [optional] 
**summary** | **object** |  | [optional] 
**encrypted_report** | **str** |  | [optional] 
**report_hash** | **str** |  | [optional] 

## Example

```python
from sipher_client.models.get_compliance_report200_response_data import GetComplianceReport200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetComplianceReport200ResponseData from a JSON string
get_compliance_report200_response_data_instance = GetComplianceReport200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetComplianceReport200ResponseData.to_json())

# convert the object into a dict
get_compliance_report200_response_data_dict = get_compliance_report200_response_data_instance.to_dict()
# create an instance of GetComplianceReport200ResponseData from a dict
get_compliance_report200_response_data_from_dict = GetComplianceReport200ResponseData.from_dict(get_compliance_report200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


