# ComplianceReport200ResponseDataSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_transactions** | **int** |  | [optional] 
**total_volume** | **str** |  | [optional] 
**unique_counterparties** | **int** |  | [optional] 
**encrypted_transactions** | **List[str]** |  | [optional] 

## Example

```python
from sipher_client.models.compliance_report200_response_data_summary import ComplianceReport200ResponseDataSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ComplianceReport200ResponseDataSummary from a JSON string
compliance_report200_response_data_summary_instance = ComplianceReport200ResponseDataSummary.from_json(json)
# print the JSON string representation of the object
print(ComplianceReport200ResponseDataSummary.to_json())

# convert the object into a dict
compliance_report200_response_data_summary_dict = compliance_report200_response_data_summary_instance.to_dict()
# create an instance of ComplianceReport200ResponseDataSummary from a dict
compliance_report200_response_data_summary_from_dict = ComplianceReport200ResponseDataSummary.from_dict(compliance_report200_response_data_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


